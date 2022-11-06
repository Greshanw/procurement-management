import React, { useState } from "react";
import { Button, Card, Container, Form, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/login";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function loginHandler(){
        loginUser(email, password).then((response)=>{
            if(response){
                navigate('/');
            }
        });
    }

    return (
        <>
            <Navbar className="bg-secondary">
            <Container>
                <Navbar.Brand className="fw-bold text-white" href="#home">Login</Navbar.Brand>
            </Container>
            </Navbar>
            <Card className="mx-auto my-5" style={{width: '500px'}}>
                <Card.Body>
                    <Form className="mx-auto my-5">
                        <img alt="login" className="col mx-auto d-block" src="/logo.png" style={{width: '250px'}}/>
                        <Form.Group className="m-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" 
                                placeholder="Email"
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="m-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" 
                                placeholder="Password"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="m-3">
                            <Button className="w-100" onClick={()=>loginHandler()}>Login</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}