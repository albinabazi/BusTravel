db.createUser(
    {
        user: "user1",
        pwd: "pass1",
        roles: [
            {
                role: "readWrite",
                db: "feedback"
            }
        ]
    }
);