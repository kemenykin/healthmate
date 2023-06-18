import express from 'express';
import sqlite3 from 'sqlite3';
import crypto from 'crypto';

sqlite3.verbose();

const db = new sqlite3.Database('../patients.db', (err) => {
    if (err) {
        console.log('error while creating db:', err);
    } else {
        console.log('db is running, everything is ok');
    }
});