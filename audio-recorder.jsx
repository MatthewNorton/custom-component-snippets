(function(manywho) {

                    
    // =========================================
    // Boomi Audio
    //===========================================
    class BoomiAudio extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
        this.state = manywho.state.getComponent(this.props.id, this.props.flowKey) || {};
        this.id = props.id;
    }
    handleChange(e) {
        manywho.state.setComponent(this.props.id, {
            contentValue: e.target.value,
        }, this.props.flowKey, true);
        manywho.component.handleEvent(this, manywho.model.getComponent(this.props.id, this.props.flowKey), this.props.flowKey);
    }
    handleEvent(e) { manywho.component.handleEvent(this, manywho.model.getComponent(this.props.id, this.props.flowKey), this.props.flowKey); }
    componentDidMount() {
        
        var id = this.props.id;
        var flowKey = this.props.flowKey;
        var model = manywho.model.getComponent(this.props.id, this.props.flowKey);




        var id = this.props.id;
        var flowKey = this.props.flowKey;
        var model = manywho.model.getComponent(this.props.id, this.props.flowKey);
        let state = manywho.state.getComponent(this.props.id, this.props.flowKey) || {};
        console.log(flowBlob);

        // Outcome Buttons
        let record = document.querySelector(".startrecording");
        let stop = document.querySelector(".stoprecording");
        let pause = document.querySelector(".pauserecording");

        // const ao_parent = document.querySelector(".audioexport");

        // URL Output from Audio Output Parent & Child used after Recording. 
        // const ao_parent = document.querySelector(".audiourl");
        // const ao_input = ao_parent.getElementsByClassName('form-control');


        URL = window.URL || window.webkitURL;

        var gumStream; //stream from getUserMedia()
        var rec; //Recorder.js object
        var input; //MediaStreamAudioSourceNode we'll be recording

        // shim for AudioContext when it's not avb. 
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        var audioContext //audio context to help us record

        var recordButton = record;
        var stopButton = stop;
        var pauseButton = pause;




        recordButton.addEventListener("click", startRecording);
        stopButton.addEventListener("click", stopRecording);
        stopButton.addEventListener("click", flowBlob);
        pauseButton.addEventListener("click", pauseRecording);

        let getBtn = document.querySelector(".getrecording");

        
        function flowBlob(urlVal) {

            // for saving state 
            //  console.log(urlVal);
            // console.log( gumStream.getAudioTracks()[0].stop() );


            let getState = manywho.state.getComponent(id, flowKey) || {};
            // let stopBtn = document.querySelector(".stoprecording");
            let parent = document.querySelector(".output-url");
            let formControl = parent.getElementsByClassName('form-control');

            // stopBtn.addEventListener('click', function() {
            for (const property of formControl) {

                property.value = urlVal;
                manywho.state.setComponent(id, {contentValue: urlVal }, flowKey, true);
                // getState.contentValue;
                // console.log( manywho.state.setComponent(id, {contentValue: urlVal }, flowKey, true));
            }
            
            
            
            // });
            
            getState;



            // return (React.createElement('h2', { className: "b64", id: id },  getState.contentValue));
            // document.createTextNode(getState.contentValue);
            // flowblob..appendChild(getState.contentValue);
            console.log("STATE VALUE => in Flow Blob:", getState);


        }

        function startRecording() {

            var constraints = {
                audio: true,
                video: false
            }

            /*
                        Disable the record button until we get a success or fail from getUserMedia() 
                    */

            recordButton.disabled = true;
            stopButton.disabled = false;
            pauseButton.disabled = false

            /*
                        We're using the standard promise based getUserMedia() 
                        https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
                    */

            navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
                // console.log("getUserMedia() success, stream created, initializing Recorder.js ...");

                /*
                    create an audio context after getUserMedia is called
                    sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
                    the sampleRate defaults to the one set in your OS for your playback device
                */
                audioContext = new AudioContext();

                //update the format 
                document.getElementById("formats").innerHTML = "Currently Recording at " + audioContext.sampleRate / 1000 + "kHz"

                /*  assign to gumStream for later use  */
                gumStream = stream;

                /* use the stream */
                input = audioContext.createMediaStreamSource(stream);

                /* 
                    Create the Recorder object and configure to record mono sound (1 channel)
                    Recording 2 channels  will double the file size
                */
                rec = new Recorder(input, {
                    numChannels: 1
                })

                //start the recording process
                rec.record();



            }).catch(function(err) {
                //e64ble the record button if getUserMedia() fails
                recordButton.disabled = false;
                stopButton.disabled = true;
                pauseButton.disabled = true
            });


        }

        function pauseRecording() {
            console.log("pauseButton clicked rec.recording=", rec.recording);
            if (rec.recording) {
                rec.stop();
                pauseButton.innerHTML = "Resume";
            } else {
                //resume
                rec.record()
                pauseButton.innerHTML = "Pause";
            }
        }

        function stopRecording() {
            console.log("stopButton clicked");

            //disable the stop button, e64ble the record too allow for new recordings
            stopButton.disabled = true;
            recordButton.disabled = false;
            pauseButton.disabled = true
            //reset button just in case the recording is stopped while paused
            pauseButton.innerHTML = "Pause";
            //tell the recorder to stop the recording
            rec.stop()
            //stop microphone access
            gumStream.getAudioTracks()[0].stop()
            //create the wav blob and pass it on to createDownloadLink
            rec.exportWAV(createDownloadLink);



        }

        function createDownloadLink(blob) {
            var reader = new FileReader();

            reader.readAsDataURL(blob);


            reader.onloadend = function() {
                var base64 = reader.result;
                flowBlob(base64, "Got It");
                //  manywho.state.getComponent(id, flowKey)
            }


            var url = URL.createObjectURL(blob);
            var au = document.createElement('audio');
            var li = document.createElement('li');
            var link = document.createElement('a');

            //64me of .wav file to use during upload and download (without extendion)
            var filename = new Date().toISOString();

            //add controls to the <audio> element
            au.controls = true;
            au.src = url;
            //save to disk link
            link.href = url;
            link.download = filename + ".wav"; //download forces the browser to donwload the file using the  filename
            link.textContent = "Save to disk";

            //add the new audio element to li
            li.appendChild(au);

            //add the filename to the li
            li.appendChild(document.createTextNode(filename + ".wav "));
            //add the save to disk link to li
            li.appendChild(link);

            recordingsList.appendChild(li);

        }

    }

    render() {
       

        return React.createElement(
            "div",
            null,
            React.createElement(
                "h4", {
                    id: "formats"
                },
                "Click the microphone to start recording"
            ),
            // React.createElement("h3", null, "Recordings"),
            React.createElement("ol", {id: "recordingsList"}),
      
        );

    }
}

    manywho.component.register('boomiaudio', BoomiAudio);