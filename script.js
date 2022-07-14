

function createTableRow(FirstName,LastName,Address,Pincode,Gender,Food,State,Country){

    let tr=document.createElement("tr")
let td1 = document.createElement("td")
let td2 = document.createElement("td")
let td3 = document.createElement("td")
let td4 = document.createElement("td")
let td5 = document.createElement("td")
let td6 = document.createElement("td")
let td7 = document.createElement("td")
let td8 = document.createElement("td")
let tbody=document.getElementById('tbody')
td1.innerHTML=FirstName
td2.innerHTML=LastName
td3.innerHTML=Address
td4.innerHTML=Pincode
td5.innerHTML=Gender
td6.innerHTML=Food
td7.innerHTML=State
td8.innerHTML=Country
tr.append(td1)
tr.append(td2)
tr.append(td3)
tr.append(td4)
tr.append(td5)
tr.append(td6)
tr.append(td7)
tr.append(td8)
tbody.append(tr)

}



let form=document.getElementById('form')
form.addEventListener('submit',(e)=>{
  e.preventDefault()

  let fname=document.getElementById('fname').value
  console.log(fname)

  let lname=document.getElementById('lname').value
  console.log(lname)

  let addline1=document.getElementById('addline1').value
  console.log(addline1)

  let addline2=document.getElementById('addline1').value
  console.log(addline2)

  let pin=document.getElementById('pin').value
  console.log(pin)

  let gender=document.getElementById('gender').value
  console.log(gender)

  let food=document.getElementById('food').value
  console.log(food)

  let state=document.getElementById('state').value
  console.log(state)

  let country=document.getElementById('country').value
  console.log(country)

  createTableRow(fname,lname,addline1+" "+addline2,pin,gender,food,state,country)
  
})