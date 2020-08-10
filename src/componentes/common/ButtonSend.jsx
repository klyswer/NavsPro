import React, {useState} from 'react';

const ButtonSend = ({name,callBack,css,disable}) => {
    const [dis,setDis] = useState(false);

    if(disable===true){
        setDis({
            dis:true
        })
    }else{
        console.log(dis)
     setDis({
            dis:false
        })
    }

    return (
        <>
        <button name={name} className={css?`buttonBasic ${css}`:'buttonBasic'} onClick={callBack}>
            {name}
        </button>
        </>
    );
}

export default ButtonSend;
