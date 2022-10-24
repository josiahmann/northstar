import "quill/dist/quill.bubble.css";
import dynamic from 'next/dynamic'
import React from "react";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
	ssr: false,
	loading: () => <p>Loading ...</p>,
});

const modules = {
    toolbar: [
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
class Editor extends React.Component {
    constructor(props){
        super(props)
        this.data = props.data;
        this.state = {
            content: props.data
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(value){
        this.setState({content: value})
        console.log('ran', value)
    }
    
    render(){
        return (
            <QuillNoSSRWrapper
                preserveWhitespace
                modules={modules} theme="bubble"
                value={this.data} onChange={this.onChange}/>
        )
    }
  }

  export default Editor;