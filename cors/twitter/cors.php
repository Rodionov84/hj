<?php

header('Content-Type: application/json');

echo file_get_contents("https://neto-api.herokuapp.com/twitter/json");