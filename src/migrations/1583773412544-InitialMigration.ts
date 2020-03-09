import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1583773412544 implements MigrationInterface {
    name = 'InitialMigration1583773412544'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "trainer" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "gender" character varying NOT NULL, "age" integer, "dateOfHire" character varying NOT NULL, "imageUrl" character varying NOT NULL, "trickExpertise" character varying NOT NULL, CONSTRAINT "PK_8dfa741df6d52a0da8ad93f0c7e" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "animal" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "species" character varying NOT NULL, "gender" character varying NOT NULL, "age" integer, "numberOfKills" integer, "imageUrl" character varying NOT NULL, "category" character varying NOT NULL, "trainerId" integer, CONSTRAINT "PK_af42b1374c042fb3fa2251f9f42" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "keeper" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "gender" character varying NOT NULL, "age" integer, "dateOfHire" character varying NOT NULL, "imageUrl" character varying NOT NULL, "speciality" character varying NOT NULL, CONSTRAINT "PK_9be119a8c475ec0a50afaf3ad30" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "animal" ADD CONSTRAINT "FK_b98bf5163842b02f57cc507ffec" FOREIGN KEY ("trainerId") REFERENCES "trainer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "animal" DROP CONSTRAINT "FK_b98bf5163842b02f57cc507ffec"`, undefined);
        await queryRunner.query(`DROP TABLE "keeper"`, undefined);
        await queryRunner.query(`DROP TABLE "animal"`, undefined);
        await queryRunner.query(`DROP TABLE "trainer"`, undefined);
    }

}
