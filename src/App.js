
import react , {useState} from "react"
import './App.css';
import Arraylist from './components/Arraylist'
import Comments from "./components/Comments";
import CommentsList from "./components/CommentsList";
import { v4 as uuidv4 } from 'uuid' ;
import { uuid } from 'uuidv4'
import Alert from "./components/Alert";

const initialcomments = [
  { id : uuidv4(),creationDate: '2016-04-22T06:23:00Z', author: 'Jean Valjean', content: "Océane est arrivée il y a seulement 3 mois"},
  { id : uuidv4(),creationDate: '2007-03-20T07:34:00Z', author: 'Océane Quessy', content: "Je n'étais pas formé à ca"},
  { id : uuidv4(),creationDate: '2012-08-27T08:54:00Z', author: 'Martin Duranseau', content: "Le marteau n'étais pas dans la malette"},
  { id : uuidv4(),creationDate: '2009-04-22T01:12:00Z', author: 'Martin Duranseau', content: "La procédure était très ancienne"},
  { id : uuidv4(),creationDate: '2016-12-09T11:34:00Z', author: 'Adrien Lacharité', content: "L'alarme est défaillante"},
  { id : uuidv4(),creationDate: '2018-01-21T06:59:00Z', author: 'Belisarda Mazuret', content: "Le sol est abimé"}
]

  function App() {
    /******************** state value ******************/
    const [comments, setComments] = useState(initialcomments) ;
    // single author
    const [author, setAuthor] = useState('');
    // single content
    const [content, setContent] = useState('');
    // alert 
    const [alert, setAlert] = useState({show: false})
    // edit
    const [edit, setEdit] = useState(false);
    // edit item
    const [id, setId] = useState(0);

    // handle author
    const handleAuthor = event => {
      console.log(`author ${event.target.value}`);
      setAuthor(event.target.value);
    };

    // handle content
    const handleContent = e =>{
      console.log(`content ${e.target.value}`);
      setContent(e.target.value);
    };

    // handle Alert

    const handleAlert = ({type,text}) => {
      setAlert( {show: true , type , text} );
      setTimeout ( () => {
        setAlert({show:false});
      },3000);
    };

    // handle submit
    const handleSubmit = e => {
      e.preventDefault();
      if( author !== '' &&  content !== '' ){
        if(edit) {
            let tempComments = comments.map( item => {
                return item.id === id?{...item,author,content} :item;
          });
          setComments(tempComments);
          setEdit(false);
          handleAlert({ type: "success" , text: "Item edited" })
    } else {
      const singleComment = {id: uuid() , author, content };
          setComments([...comments, singleComment]);
          handleAlert({ type: "success" , text: "Item added" });

    }
      setContent('');
      setAuthor('');    
    
      } 
      else  {
        // handle alert called
        handleAlert({
          type: "danger",
          text: `Author and comment can't be empty value  `
        });
        
      }
    };

    // clear all comments
    const clearComments = () => {
      setComments ([]);
      handleAlert({ type: "danger" , text: "all comments deleted" })
    };

    // handle delete
    const handleDelete = (id) => {
      let tempComments = comments.filter(item => item.id !== id);
      setComments(tempComments);
      handleAlert({ type: "danger" , text: "comment deleted" });
    };

     // handle delete
     const handleEdit = (id) => {
      let comment = comments.find(item => item.id === id);
      let {author,content} = comment;
      setAuthor(author);
      setContent(content);
      setEdit(true);
      setId(id)
      
    };


    return (
    
    <div>
      
      <div>
        <h1 id="title" className="lox"> Accident avec Adelle</h1>
        <p id="description" className="texto"> crée le 2008-03-30 à 5h13 par kristin </p>
      </div>

      <div className="toto">
        <form className="" >
          <label id ="name-label" for ="name" > <p ><b className="lox">Titre :</b></p>
          <input id="name" class="full-width padded margin-down border"
           type="text" name="name"  required placeholder="Accident avec Adelle"></input>
          </label>
          <p className="lox"><b>Description :</b></p>
          <textarea id="comments" class="full-width margin-down border"
           rows="4" cols="50" placeholder="Add your description here"></textarea>
          <div >
            <label for="start"> <b className="lox" > Date : </b></label>
            <input type="date" id="start" class="padded margin-down border " name="trip-start" value="2018-07-22"
              min="2018-01-01" max="2018-12-31"></input>

            <label for="appt" className="lox"><b>Select a time :</b></label>
            <input type="time" class="padded margin-down border" id="appt" name="appt" />
          </div>

          <label id="dropdown-label" for="dropdown"/><p className="lox"> <b>Nom du statut :</b> </p>
          <select id="dropdown" class="margin-down  ">
            <option value="ouvert"> Ouvert </option>
            <option value="ferme"> Ferme </option>
          </select> 

          <Arraylist />
    
        </form>
        
       
      </div>
      <>
            {alert.show && <Alert type={alert.type} text={alert.text}/>}
            <Alert />
            <h1 className="lox">Commentaires :</h1>
            <main className="App ">
                <Comments 
                author={author}
                content={content}
                handleAuthor={handleAuthor}
                handleContent={handleContent}
                handleSubmit={handleSubmit}
                edit={edit}
                />
                <CommentsList comments={comments} handleDelete={handleDelete} 
                handleEdit={handleEdit} clearComments={clearComments}/>
            </main>

        </>

        

    </div>
    
    );
  }



export default App;
