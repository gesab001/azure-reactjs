import styles from './Editor.module.css';
import React from 'react';
import ContentEditable from 'react-contenteditable';
import {create, retrieve, update, onDelete} from './Dropbox';
import Card from './Card'; 



class Editor extends React.Component {
  constructor() {
    super()
    
    this.questionField = React.createRef();
    this.answerField = React.createRef();
    this.state = {question: "", 
                  answer: "",
                  dataList: []
                 };
    var dataList = [];
  };
 
  componentDidMount() {
    const dataList = retrieve();
    console.log(dataList);
    const fetchDataList = async () => {
      const response = await retrieve();
      this.setState({
        dataList: response
      });
    };
    fetchDataList();
  }

  handleChangeQuestion = evt => {
    this.setState({question: evt.target.value});
  };
 
  handleChangeAnswer = evt => {
    this.setState({answer: evt.target.value});
    
  };

  onButtonClickHandlerAdd() {
    if(this.state.question=="" || this.state.answer==""){
       alert("please type question and answer");
    }else{
    	var item = {"question" : this.state.question, "answer": this.state.answer};
    	var dataList = this.state.dataList;
    	dataList.push(item);
    	this.setState({dataList: dataList});
    	console.log(this.state.dataList);
    	this.setState({question: "", answer: ""});
        create(this.state.dataList);
    }	
  }

  onButtonClickHandlerUpdate(index) {
    update(1, "test", "test");
  }

  onButtonClickHandlerDelete(index) {
    var confirmdelete = window.confirm("are you sure you want to delete?");

    if (confirmdelete) {
      var password = window.prompt("type delete to continue");
      if (password=="delete"){
      	var dataList = [...this.state.dataList];
      	console.log(dataList[index.index]);
      	dataList.splice(index.index,1);
      	this.setState({dataList: dataList});
      	onDelete(dataList);
      }else{
        alert("item not deleted");
      }
    }
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
       <button onClick = {() => {this.onButtonClickHandlerAdd()}}>Submit</button>

       <div className={styles.cardContainer}> {this.state.dataList.map((item, index) => (
                  
                  <div className={styles.cardInner} key={index} >
                      <Card item={item} index={index}></Card>
                     
                    
                 </div>
                  
               )
	     )}
       </div>
     </div>
   )};
};
export default Editor;
