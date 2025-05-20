<?php
    include 'config.php';
    $page = (isset($_POST['page']))? $_POST['page'] : 1;


    $query = "SELECT * FROM msg ORDER BY id DESC";
    $dewan1 = $conn->prepare($query);
    $dewan1->execute();
    $res1 = $dewan1->get_result();
    while ($row = $res1->fetch_assoc()) {
?>


    <div class="message-item">
      <strong class="name"><?= $row['name']; ?> Di <?= $row['asal']; ?> <span class="badge"><?= $row['present']; ?></span></strong>
      <small><?= $row['date'] ?></small>
      <i class="message"><?= $row['msg']; ?></i>
    </div>
    <hr>

    <?php }?>