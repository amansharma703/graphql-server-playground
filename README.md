## Book & Author Management System

### Data Structures

#### Book

Represents a book with its details.

-   **id**: Unique identifier for the book.
-   **title**: Title of the book.
-   **publishedYear**: Year the book was published.
-   **author**: Author of the book.

```json
{
    "id": 1,
    "title": "To Kill a Mockingbird",
    "publishedYear": 1960,
    "author": {
        "id": 1,
        "name": "Harper Lee"
    }
}
```

#### Author

Represents an author with their details and list of books they have written.

-   **id**: Unique identifier for the author.
-   **name**: Name of the author.
-   **books**: List of books written by the author.

```json
{
    "id": 1,
    "name": "Harper Lee",
    "books": [
        {
            "id": 1,
            "title": "To Kill a Mockingbird",
            "publishedYear": 1960
        }
    ]
}
```

### Data

#### List of Books

A collection of books with their details.

```json
[
    {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "publishedYear": 1960,
        "author": {
            "id": 1,
            "name": "Harper Lee"
        }
    },
    {
        "id": 2,
        "title": "1984",
        "publishedYear": 1949,
        "author": {
            "id": 2,
            "name": "George Orwell"
        }
    }
]
```

#### List of Authors

A collection of authors with their details and the books they have written.

```json
[
    {
        "id": 1,
        "name": "Harper Lee",
        "books": [
            {
                "id": 1,
                "title": "To Kill a Mockingbird",
                "publishedYear": 1960
            }
        ]
    },
    {
        "id": 2,
        "name": "George Orwell",
        "books": [
            {
                "id": 2,
                "title": "1984",
                "publishedYear": 1949
            }
        ]
    }
]
```

#### List of Books with Author Details

Books along with their respective authors' information.

```json
[
    {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "publishedYear": 1960,
        "author": {
            "id": 1,
            "name": "Harper Lee"
        }
    },
    {
        "id": 2,
        "title": "1984",
        "publishedYear": 1949,
        "author": {
            "id": 2,
            "name": "George Orwell"
        }
    }
]
```

#### List of Authors with Book Details

Authors along with the details of the books they have written.

```json
[
    {
        "id": 1,
        "name": "Harper Lee",
        "books": [
            {
                "id": 1,
                "title": "To Kill a Mockingbird",
                "publishedYear": 1960
            }
        ]
    },
    {
        "id": 2,
        "name": "George Orwell",
        "books": [
            {
                "id": 2,
                "title": "1984",
                "publishedYear": 1949
            }
        ]
    }
]
```

### Summary

This document outlines the data structures and sample data for a Book & Author Management System. The system tracks books, their publication years, and the authors who wrote them. It provides detailed information for both books and authors, showcasing how they are interconnected. This information can be used to create, read, update, and delete entries in a comprehensive library management system.
