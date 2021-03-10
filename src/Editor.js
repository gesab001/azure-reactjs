import styles from './Editor.module.css';
import React from 'react';
import ContentEditable from 'react-contenteditable';
 
class Editor extends React.Component {
  constructor() {
    super()
    
    this.questionField = React.createRef();
    this.answerField = React.createRef();
    this.state = {question: "", 
                  answer: "",
                  dataList: [{'question': 'question', 'answer': 'answer'}]
                 };
    var dataList = [];
  };
 
  handleChangeQuestion = evt => {
    this.setState({question: evt.target.value});
  };
 
  handleChangeAnswer = evt => {
    this.setState({answer: evt.target.value});
    
  };

  onButtonClickHandler() {
    var item = {"question" : this.state.question, "answer": this.state.answer};
    var dataList = this.state.dataList;
    dataList.push(item);
    this.setState({dataList: dataList});
    console.log(this.state.dataList);
  }

  render = () => {

    return  (
      <div>
       <h3>Question</h3>
       <ContentEditable 
              className = {styles.inputField}
              innerRef={this.questionField}
              html={this.state.question} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChangeQuestion} // handle innerHTML change
              tagName='div' // Use a custom HTML tag (uses a div by default)
            />
       <h3>Answer</h3>
       <ContentEditable
              className = {styles.inputField}
              innerRef={this.answerField}
              html={this.state.answer} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChangeAnswer} // handle innerHTML change
              tagName='div' // Use a custom HTML tag (uses a div by default)
            />
       <button onClick = {() => {this.onButtonClickHandler()}}>Submit</button>

       <div> {this.state.dataList.map((item, index) => (
                  <div key={index}>
                      <h4>{item.question}</h4>
                      <p>{item.answer}</p>
                 </div>
                  
               )
	     )}
       </div>
     </div>
   )};
};
export default Editor;
