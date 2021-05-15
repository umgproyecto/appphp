<?php

namespace Tests\Unit;

use App\Http\Controllers\homepage\HomepageController;
use Tests\TestCase;

class HomepageControllerTest extends TestCase
{
    //private $testingClass;

    public function setUp() :void {
        parent::setUp();
        //$this->testingClass = new HomepageController();
    }

    public function testHomepage(){
        $response = $this->get( '/' );
        $response->assertStatus(200);
    }
}
