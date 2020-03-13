import {MigrationInterface, QueryRunner} from "typeorm";

export class AnimalKeeperManyToMany1583945307256 implements MigrationInterface {
    name = 'AnimalKeeperManyToMany1583945307256'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "animal" DROP CONSTRAINT "FK_b98bf5163842b02f57cc507ffec"`, undefined);
        await queryRunner.query(`CREATE TABLE "animal_keepers_keeper" ("animalId" integer NOT NULL, "keeperId" integer NOT NULL, CONSTRAINT "PK_4d1f32ec764fcf9de755c11b339" PRIMARY KEY ("animalId", "keeperId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_b43052140399c4280dcaf17e2a" ON "animal_keepers_keeper" ("animalId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_49088585f37c628fc51ce20259" ON "animal_keepers_keeper" ("keeperId") `, undefined);
        await queryRunner.query(`ALTER TABLE "animal" ADD CONSTRAINT "FK_b98bf5163842b02f57cc507ffec" FOREIGN KEY ("trainerId") REFERENCES "trainer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "animal_keepers_keeper" ADD CONSTRAINT "FK_b43052140399c4280dcaf17e2ac" FOREIGN KEY ("animalId") REFERENCES "animal"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "animal_keepers_keeper" ADD CONSTRAINT "FK_49088585f37c628fc51ce202597" FOREIGN KEY ("keeperId") REFERENCES "keeper"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "animal_keepers_keeper" DROP CONSTRAINT "FK_49088585f37c628fc51ce202597"`, undefined);
        await queryRunner.query(`ALTER TABLE "animal_keepers_keeper" DROP CONSTRAINT "FK_b43052140399c4280dcaf17e2ac"`, undefined);
        await queryRunner.query(`ALTER TABLE "animal" DROP CONSTRAINT "FK_b98bf5163842b02f57cc507ffec"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_49088585f37c628fc51ce20259"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_b43052140399c4280dcaf17e2a"`, undefined);
        await queryRunner.query(`DROP TABLE "animal_keepers_keeper"`, undefined);
        await queryRunner.query(`ALTER TABLE "animal" ADD CONSTRAINT "FK_b98bf5163842b02f57cc507ffec" FOREIGN KEY ("trainerId") REFERENCES "trainer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
