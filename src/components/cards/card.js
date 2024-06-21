import React, { useEffect, useState } from 'react'
import getItems from './getItems'
import { Card, Col, Row } from "antd";

const HandyCard = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getItems().then((response => {
            response.length > 0 ? setNotes(response) : setNotes([])
        }));
    }, [])

    return (
        <div style={{margin: 20}}> 
            <Row gutter={8}>
                {
                    notes.map((note, key) => {
                        return <div key={key}><Col span={8}>
                            <Card title={note.title}
                                style={{
                                    width: 200,
                                    backgroundColor: `${"hsl(" + Math.random() * 360 + ", 100%, 75%)"}`
                                }}>{note.content}</Card> </Col>
                        </div>
                    })
                }
            </Row>
        </div>
    )
}

export default HandyCard