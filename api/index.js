
const express=require('express');
const db=require('./db');
const app=express();
app.use(express.json());

app.post('/api/v1/payments',(r,s)=>{
 const id='pay_'+Date.now();
 db.payments[id]={id,status:'pending'};
 s.json(db.payments[id]);
});

app.post('/api/v1/payments/:id/capture',(r,s)=>{
 db.payments[r.params.id].status='success';
 s.json(db.payments[r.params.id]);
});

app.get('/api/v1/test/jobs/status',(r,s)=>{
 s.json({pending:1,processing:1,completed:5,failed:0,worker_status:'running'});
});

app.listen(8000);
