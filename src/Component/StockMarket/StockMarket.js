import './stockmarket.css'
import {useState} from 'react'

export const StockMarket = ()=>{
	const [Watchlist,setWatchlist] = useState(["Watchlist 0","Watchlist 1","Watchlist 2","Watchlist 1","Watchlist 2","Watchlist 3","Watchlist 4","Watchlist 1","Watchlist 2","Watchlist 3","Watchlist 4"])
	const [watchClose,setWatchClose] = useState(0)	
	function addWatchList(){
		var temp = Watchlist
		temp.push(prompt("Enter Watchlist Name","Watchlist"))
		console.log(temp)
	}
	function removeFromWatchList(id){
		console.log("remove ",id)
		setWatchlist(Watchlist.filter(item=>Watchlist[id]!==item))
	}
	return (
		<div className="stockmarket-box">
			<div className="bar">
				<div className="watchlist">
					{
						Watchlist.map((item,id)=>(
							<div 
								className="watchlist-item hover" 
								onMouseEnter={()=>setWatchClose(id)} 
								onMouseLeave={()=>setWatchClose(-1)}
								onClick={()=>removeFromWatchList(id)} 
							>
								<div className={watchClose===id?'close':'open'}><abbr title={item}>{item}</abbr></div>
								<div className={watchClose===id?'open':'close'}><abbr title={item}>X</abbr></div>
							</div>
						))
					}
				</div>
				<div className="watchlist-button hover" onClick={addWatchList}>
					ADD
				</div>
			</div>
			<div>BOX</div>
		</div>
	)
}