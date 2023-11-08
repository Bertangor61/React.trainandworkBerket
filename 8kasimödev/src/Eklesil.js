import React,{useState} from 'react';

function Eklesil() {
    const[ekle , setEkle] = useState([ ]);
    const[baslik , setbaslik] = useState(' ');
    const[aciklama , setaciklama] = useState(' ');

    const addEkle = () => {
        if(baslik){
            setEkle([...ekle,{baslik:baslik,aciklama:aciklama}]);
            setbaslik('');
            setaciklama('');
        }
    }
    const sil = () => {
        setEkle([])
    }

    // const deleteEkle = (id) => {
    //     setEkle(ekle.filter(i =>i.id !== id))        //burası kullanılmayacak.
    // }
   
    return (
        <div className='container'>
            <div className='row border'>
                <div className='col-4'>
                    <p className='text-secondary'>Başlik</p>
                    <input type="text" onChange={(e) =>setbaslik(e.target.value)} value={baslik}/>
                </div>
                <div className='col-4'>
                    <p className='text-secondary'>Açiklama</p>
                    <input type="text" onChange={(e) =>setaciklama(e.target.value)} value={aciklama}/>
                </div>
                <div className='col-4' >
                    <button className='btn btn-success' type="button" onClick={addEkle}> Ekle</button>
                   
                </div>
                {ekle.map((e,index) => (
                <div>
                    <li key={index} className="list-group-item">{e.baslik},{e.aciklama}
                    <button className='btn btn-danger' type="button" onClick={sil}>Silme</button>
                     </li>
                </div>
                )
                )}
            </div>
        </div>
    )
}
export default Eklesil;