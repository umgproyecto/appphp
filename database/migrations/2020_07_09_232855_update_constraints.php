<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateConstraints extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->integer('people_id')->unsigned();

            $table->foreign('people_id')
                ->references('id')
                ->on('people')
                ->cascadeOnDelete();

        });
        Schema::table('providers', function (Blueprint $table) {
            $table->integer('people_id')->unsigned();

            $table->foreign('people_id')
                ->references('id')
                ->on('people')
                ->cascadeOnDelete();
        });
        Schema::table('employees', function (Blueprint $table) {
            $table->integer('people_id')->unsigned();

            $table->foreign('people_id')
                ->references('id')
                ->on('people')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('clients');
        Schema::dropIfExists('providers');
        Schema::dropIfExists('employees');

    }
}
