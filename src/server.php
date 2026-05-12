<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$_POST = json_decode(file_get_contents("php://input"), true);

if ($_POST) {
    // Save to db.json
    $dbFile = __DIR__ . '/../db.json';
    $data = json_decode(file_get_contents($dbFile), true);
    
    // Add timestamp and id
    $_POST['id'] = count($data['submissions']) + 1;
    $_POST['timestamp'] = date('Y-m-d H:i:s');
    
    $data['submissions'][] = $_POST;
    
    file_put_contents($dbFile, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    
    $response = [
        'status' => 'success',
        'message' => 'Data saved successfully',
        'data' => $_POST
    ];
} else {
    $response = [
        'status' => 'error',
        'message' => 'No data received'
    ];
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>