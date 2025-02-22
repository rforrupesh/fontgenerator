<?php
// Get all HTML files from the 'blog' folder
$blogDir = 'blog/';
$posts = glob($blogDir . '*.html');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>My Blog</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 20px auto;
            line-height: 1.6;
        }
        h1 {
            text-align: center;
        }
        .post {
            border: 1px solid #ddd;
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 8px;
            transition: box-shadow 0.3s;
        }
        .post:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        a {
            text-decoration: none;
            color: #3498db;
        }
    </style>
</head>

<body>

    <h1>Welcome to My Blog</h1>

    <?php
    // Loop through the blog posts
    if (count($posts) > 0) {
        foreach ($posts as $post) {
            $title = basename($post, '.html'); // Extract post title
            $titleFormatted = ucwords(str_replace('-', ' ', $title)); // Format title
            echo "<div class='post'>";
            echo "<h2><a href='$post'>$titleFormatted</a></h2>";
            echo "</div>";
        }
    } else {
        echo "<p>No blog posts found!</p>";
    }
    ?>

</body>

</html>
