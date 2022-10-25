import "quill/dist/quill.bubble.css";
import dynamic from 'next/dynamic'
import React from "react";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
	ssr: false,
	loading: () => <p>Loading ...</p>,
});


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