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
	console.log(evt);
    this.setState({question: evt.currentTarget.textContent});
  };
 
  handleChangeAnswer = evt => {
    this.setState({answer: evt.currentTarget.textContent});
    
  };

  onButtonClickHandlerAdd() {
    if(this.state.question=="" || this.state.answer==""){
       alert("please type question and answer");
    }else{
    	var item = {"question" : this.state.question, "answer": this.state.answer};
    	console.log(item);
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
	console.log(index.index);  
	var confirmdelete = window.confirm("are you sure you want to delete?");
	if (confirmdelete) {
		var password = window.prompt("type password to continue");
		if (password=="delete"){
			var dataList = [...this.state.dataList];
			console.log(dataList[index.index]);
			dataList.splice(index.index,1);
			this.setState({dataList: dataList});
			onDelete(dataList);
		}
	}
  }
  
  removeHTMLTags(str){
	  var strnew = str.replace( /(<([^>]+)>)/ig, ''); 
	  var strnew1 = strnew.replace('&nbsp;', '');
	  return strnew1;
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

       <div className={styles.container}>  {this.state.dataList.map((item, index) => (                
                <div className={styles.cardContainer}>
                  <div className={styles.cardItem}>
                     <div className={styles.question}><p>{this.removeHTMLTags(item.question)}</p></div>
                     <div className={styles.answer}><p>{this.removeHTMLTags(item.answer)}</p></div>
                  </div>
                  <div className={styles.buttonDelete}><button onClick = {() => {this.onButtonClickHandlerDelete({index})}}>Delete</button></div>
                </div>     
                         
               )
	     )}
       </div>
     </div>
   )};
};
export default Editor;
