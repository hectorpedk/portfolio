<?php

    if($_SERVER['REQUEST_METHOD'] === 'POST')
    {
        $validation = array();

        $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        if(filter_var($name, FILTER_DEFAULT))
            $validation['name'] = true;
        else
            $validation['name'] = false;

        $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        if(filter_var($email, FILTER_VALIDATE_EMAIL))
            $validation['email'] = true;
        else
            $validation['email'] = false;

        $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        if(filter_var($subject, FILTER_DEFAULT))
            $validation['subject'] = true;
        else
            $validation['subject'] = false;

        $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        if(filter_var($message, FILTER_DEFAULT))
            $validation['message'] = true;
        else
            $validation['message'] = false;

        // if all fields are validated, send the email
        if($validation['name']===true && $validation['email']===true && $validation['subject']===true && $validation['message']===true)
        {
           $validation['formValid'] = true;

           $from = $email;
           $to = "hector_dk@outlook.com";
           $subj = $subject;
           $msg = $message;
           $additional_headers = array(
            'From' => $from,
            'Replay-To' => $to,
            'X-Mailer' => 'PHP/' . phpversion()
           );

            if(mail($to, $subj, $msg, $additional_headers))
                echo json_encode($validation);
            else
            {
                $validation['formSent'] = false;
                echo $validation[$validation];
            }
        }
    }   

           
?>