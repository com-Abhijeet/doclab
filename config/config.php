<?php

/**
 * Date Time Configuration
 */
date_default_timezone_set("Asia/kolkata");

$dateTime = new DateTime();
$date_created = $dateTime->format('Y-m-d H:i:s');

$current_date = date('d-m-Y');

$current_time = date("H:i:s");