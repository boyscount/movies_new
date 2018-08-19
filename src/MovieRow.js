import React from 'react'
import { Button } from 'reactstrap';



class MovieRow extends React.Component {

    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    payMovie(){
       var a = this.props.movie.vote_count  
        
        const personn = this._person.value;
        const moneyy = this._money.value;
        const price = a * personn
        const ttitle = this.props.movie.title
        const total = moneyy - price

        if(moneyy <= price ){
            alert("เงินของท่านไม่พอ")
        }
        else if(personn == '' || moneyy == ''){
            alert("กรุณาใส่ข้อมูล")
        }
        else{
        
        const numbers = [0,0,0,0,0,0,0,0];

        numbers[0] = Math.floor(total/1000) 
        const er = numbers[0]
        const ert = (er*1000)     
        const totald = total - ert

        numbers[1] = Math.floor(totald/500)
         const q = numbers[1]
         const ttt = (q* 500)
         const tt = totald - ttt


         numbers[2] = Math.floor(tt/100)
         const onehunred = numbers[2]
         const difone = (onehunred*100)
         const sstwo = tt - difone  

         numbers[3] = Math.floor(sstwo/50)
         const hasib = numbers[3] 
         const difhasib = (hasib*50)
         const hasibs = sstwo - difhasib
        
         numbers[4] = Math.floor(hasibs/20)
         const yisib = numbers[4]
         const difyisib = (yisib * 20)
         const yiisib = hasibs - difyisib

         numbers[5] = Math.floor(yiisib/10)
         const sib = numbers[5]
         const difsib = (sib * 10)
         const siib = yiisib - difsib

         numbers[6] = Math.floor(siib/5)
         const habath = numbers[6]
         const difha = (habath * 5)
         const ha = siib - difha

         numbers[7] =  Math.floor(ha)
         const onebath = numbers[7] 

        alert("หนังเรื่อง " + ttitle + " จำนวน "+ personn + " ท่าน " + " รวมราคาทั้งสิ้น " + price + " บาท " + " จำนวนเงินที่รับ " + moneyy +" บาท "+ " เงินทอน " + total + " บาท " + "แบงค์พัน" + er + " ใบ"+" แบงค์ 500 จำนวน" + q +" ใบ" +" แบงค์ 100 จำนวน "+ onehunred +" ใบ" + " แบงค์ 50 จำนวน" + hasib + "ใบ" + " แบงค์20 จำนวน" + yisib +"ใบ "+ "เหรียญ10 จำนวน" + sib +"เหรียญ"+ " เหรียญ5 จำนวน" + habath +"เหรียญ" + " เหรียญบาท " + onebath + "เหรียญ")
        }
    }
   

    render() {
        return <table key={this.props.movie.id}>
            <tbody>
             <tr>
              <td>
              <img alt="poster" 
               src={this.props.movie.poster_src}/>
              </td>
              <td>
              <h3 className="App-title">{this.props.movie.title}</h3>
              <p className="App-content">{this.props.movie.overview}</p>
              <p className="App-content">ราคา {this.props.movie.vote_count } บาท /คน</p>
              จำนวนคน<input type="number" pattern="[0-9]*" inputmode="numeric" className="form-control" ref={input => this._person = input} placeholder=""/>
              กรุณาใส่เงิน<input type="number" pattern="[0-9]*" inputmode="numeric" className="form-control" ref={input => this._money = input} placeholder=""/>
              </td>
             </tr>
             <Button type="button"  color="success" onClick={this.viewMovie.bind(this)}>ดูรายละเอียด</Button>
             <Button type="button"  color="danger" onClick={this.payMovie.bind(this)} >จอง </Button>
            </tbody>
        </table>
        
    }
}


export default MovieRow