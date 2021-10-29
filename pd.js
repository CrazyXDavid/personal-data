var firstnames = ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum', 'Mason', 'Robert', 'Jacob', 'Jacob', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'William', 'Thomas', 'Joe', 'Ethan', 'David', 'George', 'Reece', 'Michael', 'Richard', 'Oscar', 'Rhys', 'Alexander', 'Joseph', 'James', 'Charlie', 'James', 'Charles', 'William', 'Damian', 'Daniel', 'Thomas',
    'Amelia', 'Margaret', 'Emma', 'Mary', 'Olivia', 'Samantha', 'Olivia', 'Patricia', 'Isla', 'Bethany', 'Sophia', 'Jennifer', 'Emily', 'Elizabeth', 'Isabella', 'Elizabeth', 'Poppy', 'Joanne', 'Ava', 'Linda', 'Ava', 'Megan', 'Mia', 'Barbara', 'Isabella', 'Victoria', 'Emily', 'Susan', 'Jessica', 'Lauren', 'Abigail', 'Margaret', 'Lily', 'Michelle', 'Madison', 'Jessica', 'Sophie', 'Tracy', 'Charlotte', 'Sarah'
]

var lastnames = [
    "Chan",
    "Cheng",
    "Cheung",
    "Chiu",
    "Chow",
    "Hung",
    "Ip",
    "Kwan",
    "Lam",
    "Lau",
    "Lai",
    "Lee",
    "Leung",
    "Liu",
    "Lo",
    "Ng",
    "Poon",
    "So",
    "Siu",
    "Tam",
    "Tsang",
    "Yau",
    "Yiu",
    "Yu",
    "Wong",
    "Li",
    "Lee",
    "Yeung",
    "Chau",
    "Tsui",
    "Suen",
    "Ma",
    "Chu",
    "Wu",
    "Kwok",
    "Ho",
    "Ko",
    "Tse",
    "Sung",
    "Tong",
    "Hoi",
    "Tang",
    "Hon",
    "Fung",
    "Cho",
    "Tso",
    "Pang",
    "Siu",
    "Shiu",
    "Tin",
    "Tung",
    "Poon",
    "Pun",
    "Yuen",
    "Choi",
    "Tseung",
    "Yu",
    "Yue",
    "To",
    "Ching",
    "Ngai",
    "So",
    "Lui",
    "Ting",
    "Yam",
    "Lou"
];

var firstname = () => {
    return firstname[Math.floor(Math.random() * firstnames.length)]
}

var lastname = () => {
    return lastname[Math.floor(Math.random() * lastname.length)]
}

var email = () => {
    return firstname + lastname + Math.floor(Math.random() * 9999) + '@gmail.com'
}