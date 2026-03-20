<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require "db.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['id_user']) || !isset($data['id_jeu'])) {
    echo json_encode([
        "success" => false,
        "error" => "Données manquantes"
    ]);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO VOTE (id_user, id_jeu) VALUES (?, ?)");
    $stmt->execute([$data['id_user'], $data['id_jeu']]);

    echo json_encode(["success" => true]);
} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "error" => $e->getMessage()
    ]);
}
?>