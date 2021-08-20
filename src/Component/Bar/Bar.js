import './bar.css'
import {useState,useEffect} from 'react'


export const Bar = ()=>{
	return(
		<div className="container">
			<Market />
			<Notification />
			<User />
		</div>
	)
}

const Market = ()=>{
	var data = [
		{
			"underlying":"NIFTY 50",
			"price":16700.00,
			"change":0.43
		},{
			"underlying":"BANKNIFTY",
			"price":46700.00,
			"change":0.73
		},
		{
			"underlying":"WIPRO",
			"price":650,
			"change":-4.00
		},
		{
			"underlying":"BPCL",
			"price":460,
			"change":0.43
		},
		{
			"underlying":"ITC",
			"price":230,
			"change":0.73
		},
		{
			"underlying":"RELIANCE",
			"price":2202,
			"change":-4.00
		}
	]
	var time=5000;
	const [count,setCount] = useState(0);

	function change(){
		if(count+3>=data.length-1){
			setCount(0)
		}else{
			setCount(count+3)
		}
	}

	useEffect(
        () => {
            const id = setInterval(change, time);
            return () => clearInterval(id);
        },
        [count]
    );

	return (
		<div className="market" >
			<div className="market-box">
				<div className="underlying">{data[count]["underlying"]}</div>
				<div className="price">{data[count]["price"]}</div>
				<div className={data[count]["change"]<0?'red change':'green change'}>{data[count]["change"]}%</div>
			</div>
			<div className="market-box">
				<div className="underlying">{data[count+1]["underlying"]}</div>
				<div className="price">{data[count+1]["price"]}</div>
				<div className={data[count+1]["change"]<0?'red change':'green change'}>{data[count+1]["change"]}%</div>
			</div>
			<div className="market-box">
				<div className="underlying">{data[count+2]["underlying"]}</div>
				<div className="price">{data[count+2]["price"]}</div>
				<div className={data[count+2]["change"]<0?'red change':'green change'}>{data[count+2]["change"]}%</div>
			</div>
		</div>
	)
}

const Notification = ()=>{
	var message = ["Gmail : Anuj Send Message For You","Gmail : Zerodha Funds Alert","Gmail : You are selected on google","Linkedin : Ankit Aman wants to connect"]
	const [count,setCount]=useState(message.length-1)
	function previous(){
		if(count===0){
			setCount(message.length-1)
		}else{
			setCount(count-1)
		}
	}
	function next(){
		if(count===message.length-1){
			setCount(0)
		}else{
			setCount(count+1)
		}
	}
	return(
		<div className="notification-box">
			<div className="notification-button center noselect" onClick={()=>previous()}>Pre</div>
			<div className="message-bar center">
				{message[count]}
			</div>
			<div className="notification-button center noselect" onClick={next}>Next</div>
		</div>
	)
}

const User = ()=>{
	const [menuDrop,setMenuDrop] = useState(0);
	window.addEventListener('click', function(e){   
		if (document.getElementById('menu').contains(e.target)){
			if(menuDrop===0){
				setMenuDrop(1)
			}
		} else{
			if(menuDrop===1){
				setMenuDrop(0)
			}
		}
	});

	return(
		<div className="user">
			<div>
				<div className="menu-button noselect" id="menu" onClick={()=>setMenuDrop(!menuDrop)}>Links</div>
				<div className={menuDrop?'active noselect':'no-active noselect'}>
					<ul>
						<li>Market</li>
						<li>Projects</li>
						<li>Notification</li>
					</ul>
				</div>
			</div>
		</div>
	)
}