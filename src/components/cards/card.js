import React, { useEffect, useState } from 'react'
import getItems from './getItems'
import { Card, Col, Row } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import deleteNote from '../../services/deleteNote';

const HandyCard = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getItems().then((response => {
            response.length > 0 ? setNotes(response) : setNotes([])
        }));
    }, [])

    return (
        <div style={{ margin: 20 }} >
            <Row gutter={8}>
                {
                    notes.map((note, key) => {
                        return <div key={key}><Col span={8}>
                            <Card title={note.title}
                                style={{
                                    width: 200,
                                    backgroundColor: `${"hsl(" + Math.random() * 360 + ", 100%, 75%)"}`
                                }}>
                                {note.content}
                                <DeleteOutlined style={{position: 'absolute', bottom:10 , right:10}} onClick={async(e)=>{
                                    e.preventDefault();
                                   let deleted = await deleteNote(note._id);
                                    console.log(deleted);
                                }}/>
                            </Card> </Col>
                        </div>
                    })
                }
            </Row>
        </div>
    )
}

export default HandyCard