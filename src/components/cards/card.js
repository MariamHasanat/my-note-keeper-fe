import React, { useEffect, useState } from 'react'
import getItems from '../../services/getItems'
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
                                    backgroundColor: `${"#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")}`
                                }}>{note.content}</Card> </Col>
                        </div>
                    })
                }
            </Row>
        </div>
    )
}

export default HandyCard