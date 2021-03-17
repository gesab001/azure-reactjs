import styles from './Card.module.css';
import React from 'react';
import {create, retrieve, update, onDelete} from './Dropbox';

class Card extends React.Component {

  constructor (props) {
    super(props)
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
      
     return (
        <div className={styles.container}>  
			<div className={styles.flipcard}>
			  <div className={styles.flipcardinner}>
				<div className={styles.flipcardfront}>
				  <h3>{this.props.item.question}</h3>
				  
				</div>
				<div className={styles.flipcardback}>
				   <p>{this.props.item.answer}</p>
				  
				</div>
			  </div>
			</div>
        </div> 
     
     );
  }
}

export default Card;
