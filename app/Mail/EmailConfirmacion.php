<?php

namespace App\mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\User;

class EmailConfirmacion extends Mailable
{
    use Queueable, SerializesModels;
    public $user;

    public function __construct(User $user)
    {
      $this->user = $user;
    }

    public function build()
    {
        return $this->view('emails.email-confirmacion');
    }
}
