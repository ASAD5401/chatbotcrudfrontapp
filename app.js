async function delete_student(id) {
    await fetch('https://chatbotsaylaniapp.herokuapp.com/student/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
    location.reload()
}
 async function update_student(id){
    console.log(id)
    var name=document.getElementById(id+'-name').value
    var rollno=document.getElementById(id+'-rollno').value
    var email=document.getElementById(id+'-email').value
    var phone=document.getElementById(id+'-phone').value
    var address=document.getElementById(id+'-address').value
    console.log(name, email, phone, rollno, address)

    const inputData = {}
    if (name) {
        inputData.name = name
    }
    if (email) {
        inputData.email = email
    }
    if (rollno) {
        inputData.rollno = rollno
    }
    if (phone) {
        inputData.phone = phone
    }
    if (address) {
        inputData.address = address
    }
console.log(inputData)

    await fetch('https://chatbotsaylaniapp.herokuapp.com/student/' + id, {
        method: 'put',
        body: JSON.stringify(inputData),
        headers: { 'content-type': 'application/json' }

    }).then((res) => {
        console.log(res.status)
        if (res.status == 400) {
            alert("User already exsist")
        } 
        else if (res.status == 500) {
            alert("Please fill all the fields")

        }
         else {
            alert("user successfully registered")
        }
    }).catch((err) => console.log(err))
    const table = document.getElementById('table')
    console.log(table)
    const thead = document.getElementById("thead")
    table.removeChild(thead)
    getStudents()



}
async function edit_student(id,index) {
    // console.log(id,index)
console.log(data[index])
    var record=document.getElementById(id)
    record.innerHTML=`<td><input type='text' id=${data[index]._id}-name value=${data[index].name}></td>
    <td><input type='text' id=${data[index]._id}-rollno value=${data[index].rollno}></td>
    <td><input type='text' id=${data[index]._id}-email value=${data[index].email}></td>
    <td><input type='text' id=${data[index]._id}-phone value=${data[index].phone}></td>
    <td><input type='text' id=${data[index]._id}-address value=${data[index].address}></td>
    <td><button class='btn' onclick="update_student('${id}')" >UPDATE</button></td> `
    console.log(record)

}
// var data;
async function getStudents() {
    response = await fetch('https://chatbotsaylaniapp.herokuapp.com/students');
    data = await response.json();
    const table = document.getElementById('table')
    var thead = document.createElement("tbody")
    thead.setAttribute("id", "thead")


    data.map((student,index) => {
        var tr = document.createElement("tr")
        tr.setAttribute("id",`${student._id}`)
        var name = document.createElement("td")
        name.setAttribute("data-label","Name")
        var rollno = document.createElement("td")
        rollno.setAttribute("data-label","Roll No")

        var email = document.createElement("td")
        email.setAttribute("data-label","Email")

        var phone = document.createElement("td")
        phone.setAttribute("data-label","Phone")

        var address = document.createElement("td")
        address.setAttribute("data-label","Address")

        var button = document.createElement("td")
        var edit_button = document.createElement("td")
        var del_but = document.createElement("button")
        del_but.setAttribute("class","btn")
        var edit_but = document.createElement("button")
        edit_but.setAttribute("class","btn")


        del_but.setAttribute("onclick", `delete_student('${student._id}')`)
        edit_but.setAttribute("onclick", `edit_student('${student._id}',${index})`)

        button.appendChild(del_but)
        var button_text = document.createTextNode("EDIT");
        edit_button.appendChild(edit_but)
        edit_but.appendChild(button_text)




        var student_name = document.createTextNode(student.name);
        var student_rollno = document.createTextNode(student.rollno);
        var student_email = document.createTextNode(student.email);
        var student_phone = document.createTextNode(student.phone);
        var student_address = document.createTextNode(student.address);
        var button_text = document.createTextNode("DELETE");
        del_but.appendChild(button_text)
        name.appendChild(student_name)
        rollno.appendChild(student_rollno)
        email.appendChild(student_email)
        phone.appendChild(student_phone)
        address.appendChild(student_address)
        tr.appendChild(name)
        tr.appendChild(rollno)
        tr.appendChild(email)
        tr.appendChild(phone)
        tr.appendChild(address)
        tr.appendChild(button)
        tr.appendChild(edit_button)



        thead.appendChild(tr)


        console.log(table)

    })
    table.appendChild(thead)
    console.log(table)
}
getStudents()



async function submit() {

    var rollno = document.getElementById("id").value
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var address = document.getElementById("address").value
    console.log(name, email, phone, rollno, address)
    const inputData = {
        name: name,
        email: email,
        phone: phone,
        rollno: rollno,
        address: address
    }

    await fetch('https://chatbotsaylaniapp.herokuapp.com/student', {
        method: 'post',
        body: JSON.stringify(inputData),
        headers: { 'content-type': 'application/json' }

    }).then((res) => {
        console.log(res.status)
        if (res.status == 400) {
            alert("User already exsist")
        } else if (res.status == 500) {
            alert("Please fill all the fields")

        } else {
            alert("user successfully registered")
        }
    }).catch((err) => console.log(err))
    const table = document.getElementById('table')
    console.log(table)
    const thead = document.getElementById("thead")
    table.removeChild(thead)

    getStudents()


}




async function update() {

    var id = document.getElementById("update_id").value
    var rollno = document.getElementById("up_id").value
    var name = document.getElementById("up_name").value
    var email = document.getElementById("up_email").value
    var phone = document.getElementById("up_phone").value
    var address = document.getElementById("up_address").value
    console.log(name, email, phone, rollno, address)
    const inputData = {}
    if (name) {
        inputData.name = name
    }
    if (email) {
        inputData.email = email
    }
    if (rollno) {
        inputData.rollno = rollno
    }
    if (phone) {
        inputData.phone = phone
    }
    if (address) {
        inputData.address = address
    }


    await fetch('https://chatbotsaylaniapp.herokuapp.com/student/' + id, {
        method: 'put',
        body: JSON.stringify(inputData),
        headers: { 'content-type': 'application/json' }

    }).then((res) => {
        console.log(res.status)
        if (res.status == 400) {
            alert("User already exsist")
        } else if (res.status == 500) {
            alert("Please fill all the fields")

        } else {
            alert("user successfully registered")
        }
    }).catch((err) => console.log(err))

}