<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Successful</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="result-container">
            <div class="result-header">
                <div class="success-icon">✓</div>
                <h1 class="result-title">Registration Successful!</h1>
                <p class="result-subtitle">Your student registration has been submitted successfully.</p>
            </div>

            <div class="result-content">
                <h2 style="color: #667eea; margin-bottom: 20px; text-align: center;">Student Information</h2>
                
                <?php
                // Check if form was submitted via POST
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    // Sanitize and retrieve form data
                    $firstName = htmlspecialchars(trim($_POST['firstName'] ?? ''));
                    $lastName = htmlspecialchars(trim($_POST['lastName'] ?? ''));
                    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
                    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
                    $dateOfBirth = htmlspecialchars(trim($_POST['dateOfBirth'] ?? ''));
                    $gender = htmlspecialchars(trim($_POST['gender'] ?? ''));
                    $address = htmlspecialchars(trim($_POST['address'] ?? ''));
                    $city = htmlspecialchars(trim($_POST['city'] ?? ''));
                    $state = htmlspecialchars(trim($_POST['state'] ?? ''));
                    $zipCode = htmlspecialchars(trim($_POST['zipCode'] ?? ''));
                    $country = htmlspecialchars(trim($_POST['country'] ?? ''));
                    $studentId = htmlspecialchars(trim($_POST['studentId'] ?? ''));
                    $course = htmlspecialchars(trim($_POST['course'] ?? ''));
                    $year = htmlspecialchars(trim($_POST['year'] ?? ''));
                    $emergencyContact = htmlspecialchars(trim($_POST['emergencyContact'] ?? ''));
                    $emergencyPhone = htmlspecialchars(trim($_POST['emergencyPhone'] ?? ''));
                    $terms = isset($_POST['terms']) ? 'Yes' : 'No';

                    // Format date of birth for display
                    $formattedDate = '';
                    if ($dateOfBirth) {
                        $dateObj = DateTime::createFromFormat('Y-m-d', $dateOfBirth);
                        if ($dateObj) {
                            $formattedDate = $dateObj->format('F d, Y');
                        } else {
                            $formattedDate = $dateOfBirth;
                        }
                    }

                    // Display the information in a formatted way
                    echo '<div class="info-row">';
                    echo '<div class="info-label">Full Name:</div>';
                    echo '<div class="info-value">' . $firstName . ' ' . $lastName . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Email Address:</div>';
                    echo '<div class="info-value">' . $email . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Phone Number:</div>';
                    echo '<div class="info-value">' . $phone . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Date of Birth:</div>';
                    echo '<div class="info-value">' . $formattedDate . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Gender:</div>';
                    echo '<div class="info-value">' . $gender . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Address:</div>';
                    echo '<div class="info-value">' . $address . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">City:</div>';
                    echo '<div class="info-value">' . $city . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">State/Province:</div>';
                    echo '<div class="info-value">' . $state . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Zip/Postal Code:</div>';
                    echo '<div class="info-value">' . $zipCode . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Country:</div>';
                    echo '<div class="info-value">' . $country . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Student ID:</div>';
                    echo '<div class="info-value">' . $studentId . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Course/Program:</div>';
                    echo '<div class="info-value">' . $course . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Year of Study:</div>';
                    echo '<div class="info-value">' . $year . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Emergency Contact:</div>';
                    echo '<div class="info-value">' . $emergencyContact . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Emergency Phone:</div>';
                    echo '<div class="info-value">' . $emergencyPhone . '</div>';
                    echo '</div>';

                    echo '<div class="info-row">';
                    echo '<div class="info-label">Terms Accepted:</div>';
                    echo '<div class="info-value">' . $terms . '</div>';
                    echo '</div>';

                    // Optional: Save to file (for demonstration purposes)
                    // In a real application, you would save to a database
                    $data = array(
                        'timestamp' => date('Y-m-d H:i:s'),
                        'firstName' => $firstName,
                        'lastName' => $lastName,
                        'email' => $email,
                        'phone' => $phone,
                        'dateOfBirth' => $dateOfBirth,
                        'gender' => $gender,
                        'address' => $address,
                        'city' => $city,
                        'state' => $state,
                        'zipCode' => $zipCode,
                        'country' => $country,
                        'studentId' => $studentId,
                        'course' => $course,
                        'year' => $year,
                        'emergencyContact' => $emergencyContact,
                        'emergencyPhone' => $emergencyPhone
                    );

                    // Save to JSON file (optional - for data persistence)
                    $filename = 'registrations.json';
                    $registrations = array();
                    
                    if (file_exists($filename)) {
                        $existingData = file_get_contents($filename);
                        $registrations = json_decode($existingData, true) ?: array();
                    }
                    
                    $registrations[] = $data;
                    file_put_contents($filename, json_encode($registrations, JSON_PRETTY_PRINT));

                } else {
                    // If accessed directly without POST, show error
                    echo '<div style="text-align: center; padding: 40px;">';
                    echo '<h2 style="color: #e74c3c; margin-bottom: 20px;">No Data Submitted</h2>';
                    echo '<p style="color: #666; margin-bottom: 30px;">Please fill out the registration form first.</p>';
                    echo '<div class="back-button">';
                    echo '<a href="index.html">Go to Registration Form</a>';
                    echo '</div>';
                    echo '</div>';
                }
                ?>

                <?php if ($_SERVER["REQUEST_METHOD"] == "POST"): ?>
                <div class="back-button" style="margin-top: 30px;">
                    <a href="index.html">Register Another Student</a>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</body>
</html>


