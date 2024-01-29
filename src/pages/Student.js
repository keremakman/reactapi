import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/Loading.js';


function Student(){

    

    const[loading,setLoading] = useState(true);
    const[students,setStudents] = useState([]);

    useEffect(() => {
       
        axios.get(`http://localhost:8000/api/students`).then(res=>{
            console.log(res)
            setStudents(res.data.students);
            setLoading(false);
        });
       
    }, [])

    const deleteStudent = (e, id) =>{
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting...";

        axios.delete(`http://localhost:8000/api/students/${id}/delete`)
        .then(res =>{
            alert(res.data.message);
            thisClicked.closest("tr").remove();
        })
        .catch(function(error){
            if(error.response){
               
                if(error.response.status === 404){
                    alert(error.response.data.message)
                    thisClicked.innerText = "Delete";
                }
                if(error.response.status === 500){
                    alert(error.response.data)
                  
                }
            }
        });
    }

    if(loading){
        return(
            
            <Loading/>
        )
    }

    var studentDetails="";
    studentDetails=students.map((item, index)=>{
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                    <Link to={`/students/${item.id}/edit`} className="btn btn-success">Düzenle</Link>
                </td>
                <td>
                    <button type="button" onClick={(e) => deleteStudent(e, item.id)} className="btn btn-danger">Sil</button>
                </td>
            </tr>
        )
    });

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>
                               Müşteri Listesi
                                <Link to="/students/create" className="btn btn-primary float-end">
                                    Müşteri Ekle
                                </Link>
                            </h4>
                        </div>

                        

                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Ad Soyad</th>
                                        <th>Tip</th>
                                        <th>Email</th>
                                        <th>Numara</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student;