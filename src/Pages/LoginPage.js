import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        if (props.login(username, password)) {
            alert("Đăng nhập thành công");
            navigate('/');
        }
        else {
            alert("Tài khoản không hợp lệ !");
        }
    };

    const handleClear = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Central Authentication Service</h2>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="submit" style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#007BFF', color: '#fff', cursor: 'pointer' }}>
                        Login
                    </button>
                    <button type="button" onClick={handleClear} style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#6c757d', color: '#fff', cursor: 'pointer' }}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
