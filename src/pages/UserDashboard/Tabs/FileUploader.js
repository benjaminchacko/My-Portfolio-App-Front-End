import React, { Component } from "react";
import { FilePond, File, registerPlugin } from "react-filepond";
import firebase from "firebase";
import StorageDataTable from "./StorageDataTable";
import config from '../../../firebase/firebase'

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Register plugin
import FilePondImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondImagePreview);

class FileUploader extends Component {
  constructor(props) {
    super(props);
    
    // Initialize Firebase
    firebase.initializeApp(config);

    this.state = {
      files: [], //File Upload
      uploadValue: 0, //Process Upload
      filesMetadata: [], // Metadata Firebase
      rows: [], // DataTable
      message: []
    };
    
     
  }
   
  

  handleInit() {
    // handle init file upload here
    console.log("now initialised", this.pond);
  }

  handleProcessing(fieldName, file, metadata, load, error, progress, abort) {
    // handle file upload here
    console.log(" handle file upload here");
    console.log(file);

    const fileUpload = file;
    const storageRef = firebase.storage().ref(`filepond/${file.name}`);
    const task = storageRef.put(fileUpload);

    task.on(
      `state_changed`,
      snapshort => {
        console.log(snapshort.bytesTransferred, snapshort.totalBytes);
        let percentage =
          (snapshort.bytesTransferred / snapshort.totalBytes) * 100;
        //Process
        this.setState({
          uploadValue: percentage
        });
      },
      () => {
        //Success
        this.setState({
          message: `Upload Success`,
          picture: task.snapshot.downloadURL //เผื่อนำไปใช้ต่อในการแสดงรูปที่ Upload ไป
        });

        storageRef
          .getMetadata()
          .then(metadata => {
            // Metadata now contains the metadata for 'filepond/${file.name}'
            let metadataFile = {
              name: metadata.name,
              size: metadata.size,
              contentType: metadata.contentType,
              fullPath: metadata.fullPath,
              downloadURLs: metadata.downloadURLs[0]
            };

            const databaseRef = firebase.database().ref("/filepond");

            databaseRef.push({
              metadataFile
            });
          })
          .catch(function(error) {
            this.setState({
              message: `Upload error : ${error.message}`
            });
          });
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div className="Margin-25">
          <FilePond
            allowMultiple={false}
            maxFiles={1}
            status={0}
            ref={ref => (this.pond = ref)}
            server={{ process: this.handleProcessing.bind(this) }}
            oninit={() => this.handleInit()}
          >
            {this.state.files.map(file => (
              <File key={file} source={file} />
            ))}
          </FilePond>
          <StorageDataTable />
        </div>
      </div>
    );
  }
}

export default FileUploader;
