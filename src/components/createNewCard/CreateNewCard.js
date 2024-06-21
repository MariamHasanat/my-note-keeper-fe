import React, { useState } from 'react'
import setItems from './setItems'
import { Button, Form, Input } from 'antd'


const CreateNewCard = () => {
    const [form] = Form.useForm();
    const [note, setNote] = useState({
        title: '',
        content: '',
        creationDate: null //Date.now()
    })

    const onReset = () => {
        form.resetFields();
        setNote({
            title: '',
            content: '',
            creationDate: null
        })

    };
    return (
        <Form autoComplete="off" form={form}>
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Please input your title!',
                        type: "text"
                    },
                ]}
            >
                <Input value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} />
            </Form.Item>
            <Form.Item
                label="Content"
                name="content"
                rules={[
                    {
                        required: true,
                        message: 'Please input your content!',
                        type: "text"
                    },
                ]}
            >
                <Input value={note.content} onChange={(e) => setNote({ ...note, content: e.target.value })} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" onClick={async (e) => {
                    e.preventDefault();
                    let date = Date.now();
                    await setNote(prev => ({ ...prev, creationDate: date }))
                    let jsonData = JSON.stringify(note);
                    setItems(jsonData)
                    console.log({ ...note, creationDate: date });
                    onReset();

                }}>
                    Submit
                </Button>
                <Button htmlType="button" onClick={(e) => {
                    e.preventDefault();
                    onReset();
                }}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CreateNewCard