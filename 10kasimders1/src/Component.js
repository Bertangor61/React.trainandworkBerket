import React, { useState } from 'react';

function Component() {
    const[list,setlist]= useState([]); //dizi tanımlandı,title ve desc bunun içine aktarılcak.
    const [id, setid] = useState(0);    
    const[title,settitle] = useState('');
    const[desc,setdesc] =useState('');
    const[editId,seteditId] = useState();
    const[mode,setmode]=useState("add")

    const addAdd=() =>{  //ekleme butonu için
        if(title && desc){
            setid(id+1) 
            setlist([...list,{id:id,title:title,desc:desc}]);
            settitle('');
            setdesc('');
        }
    }
    const delDelete=(id) =>{  //silme butonu için
        setlist(list.filter(z => z.id !== id))
    }
    const edtEdit=(z) =>{  //edit butonu için
        settitle(z.title);
        setdesc(z.desc);
        seteditId(z.id);
        setmode("edit"); 
    }
    const updatelist= () => {   //edit e basılınca veriyi update etmek için
        const newlist = list.map((z) => {
            return z.id === editId ? { title:title,desc:desc,id:editId} :z ;
        }) 
        setlist(newlist); ///newlist mi olcak hocaya sor ? edit tuşu çalışıyor ama editleme çalışmıyor.
        settitle("");
        setdesc("");
        seteditId("");
        setmode("add");
    }
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <p>Title</p>
                    <input type="text"  onChange={(x) => settitle(x.target.value)} value={title}/>
                </div>
                <div className='col-4'>
                    <p>Description</p>
                    <input type="text" onChange={(y) => setdesc(y.target.value)} value ={desc}/>   
                </div>
                <div className='col-4'>
                    <p>Actions</p>
                    {mode === "add" ? (
                        <button className='btn btn-success mt-3'onClick={addAdd}>Add</button>

                    ) : (
                        <button className='btn btn-success mt-3'onClick={updatelist}>Edit</button>
                    )}
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                            
                                {list.map((z,abc)=>{
                                    return (
                                        <div className='row'key={abc} >
                                            <div  className='list-group-item col-4'>{z.title}</div>
                                            <div  className='list-group-item col-4'>{z.desc}</div>
                                            <div  className='col-4'>
                                                <button  className='btn btn-danger col-2'type='button' onClick={()=>delDelete(z.id) }>Delete</button>
                                                <button  className='btn btn-secondary col-2'type='button' onClick={()=>edtEdit(z) }>Edit</button>
                                            </div>
                                        </div>
                                    )
                                 })} 
                </div>
            </div>
        </div>
    )
}



export default Component;