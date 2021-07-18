import React from 'react'
import Select from 'react-select';

class Arraylist extends React.Component 
{
    EnvolvedEmploy = {
       myarray:["Adelle Thornburg (1868)","Amara Ivens (8139)","Helena Hewitt (2532)"]
             
    }
    
    Témoins = {
        myArray:["Mureil","Melina","Tina","Luci","Jeanna","Lucie"]
    }
         
    render()
    {
        return(
            <form>
                <div>
                    <label id="dropdown-label" for="dropdown"><p className="lox"><b>Employé impliqué :</b></p>
                    <select id="dropdown" class="padded margin-down border ">
                        {this.EnvolvedEmploy.myarray.map(data =>
                        (
                        <option>{data}</option>
                        ))}
                    </select>
                    </label>
                </div>
                <div>
                    <label id="dropdown-label" for="dropdown"><p className="lox"><b> Témoins :</b></p>
                        <select id="dropdown" class="padded margin-down border ">
                            {this.Témoins.myArray.map(data =>
                            (
                            <option>{data}</option>
                            ))}
                           
                        </select>
                    </label>
                </div>
            </form>
        );
    }          
      

}
export default Arraylist;