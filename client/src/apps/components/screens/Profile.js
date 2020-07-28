import React, { Component } from 'react'

export const Profile = () => {
    return (
        <div style={{maxWidth: '550px', margin:'0px auto'}}>
            <div style={{display:'flex', justifyContent:'space-around', margin: "18px 0px", borderBottom: '1px solid grey'}}>
                <div>
                    <img style={{width: '160px', height:'160px', borderRadius: '80px'}} src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
                </div>
                <div>
                    <h4>Muhammd Taufik</h4>
                    <div style={{display: 'flex', justifyContent:'space-between', width: '108%'}}>
                        <h5>40 Posts</h5>
                        <h5>40 Posts</h5>
                        <h5>40 Posts</h5>
                    </div>
                </div>
            </div>
            <div className="galery">
                <img className="item" src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
                <img className="item" src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
                <img className="item" src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
                <img className="item" src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
                <img className="item" src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
                <img className="item" src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
               
            </div>
            
        
        </div>
    )
}


export default Profile;
