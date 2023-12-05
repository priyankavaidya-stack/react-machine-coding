import React, { useMemo, useState } from 'react';


const items = [
    {
        id: 1,
        isActive: true,
        date : new Date("2016/01/12")
    },
    {
        id: 2,
        isActive: false,
        date : new Date("2017/01/12")
    },
    {
        id: 3,
        isActive: true,
        date : new Date("2018/01/12")
    },
    {
        id: 4,
        isActive: false,
        date : new Date("2019/01/12")
    }
]

// for normal operations of useMwemo, useMemo function is enough, 
// no need to use click button Memo() comp belowed
const UseMemo = ({items}) => {

    const filteredItems = useMemo(() => {
        return items.filter(item => item.isActive);
    },
    [items]);
    
    const sortedItems = useMemo(() => {
        return filteredItems.sort((a,b) => a.date - b.date);
    },
    [filteredItems]);
    
    const renderedItems =  useMemo(() => {
        return sortedItems.map((item) => (
                <Item key={item.id} item={item} />
        ));
    },[sortedItems]);

    console.log("hii");
  return (
    <div>
      {renderedItems}
    </div>
  )
}

const Item = ({ item }) => {
    return(
        <>
            <p>{item.id}</p>
            <p>{item.isActive.toString()}</p>
            <p>{item.date.toDateString()}</p>
        </>
    )
}

// export default UseMemo;

// we have added this extra click button memo component just to see console msg when it is printing
// useMemo nt prints hii msg when same data rendered.
const Memo = () =>{
    const [memo, setMemo] = useState([]);

    function handleClick(){
        setMemo(items)
    }
    return(
        <>
        <button onClick={ handleClick }>Click</button>
        <UseMemo items={ memo } />
        </>
    );
       
}

export default Memo;