import React, { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";


function Dashboard() {

    const [quizzes, setQuizzes] = useState([]);
    const naviagte = useNavigate();

    useEffect(() => {
        API.get("/api/quiz/all")
        .then(res => {
            setQuizzes(res.data);
        })
        .catch(err => {
            console.log(err);
            naviagte("/Login");
        });
    }, []);
    
    
    
    
    return (
        <div style={{ padding: "40px" }}>
           <h2>Available Quizzes</h2>

           {quizzes.map((quiz) => {
            <div key={quiz._id} style={{ marginBottom: "15px" }}>
                <h4>{quiz.title}</h4>
                <button onClick={() => naviagte(`/QuizPage/${quiz._id}`)}>
                    Start Quiz

                </button>
                </div>
           })}
        </div>
    );
}

export default Dashboard;