const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seedOrganizationType = require('./seeders/01_organization_type.seeder');
const seedOrganizationStatus = require('./seeders/02_organization_status.seeder');
const seedOrganizationDocType = require('./seeders/03_organization_doc_type.seeder');
const seedPermission = require('./seeders/04_permission.seeder');
const seedUserStatus = require('./seeders/05_user_status.seeder');
const seedTenderCategory = require('./seeders/06_tender_category.seeder');
const seedTenderStatus = require('./seeders/07_tender_status.seeder');
const seedTenderDocType = require('./seeders/08_tender_doc_type.seeder');
const seedBidStatus = require('./seeders/09_bid_status.seeder');
const seedBidDocType = require('./seeders/10_bid_doc_type.seeder');
const seedCommitteeType = require('./seeders/11_committee_type.seeder');
const seedSystemConfig = require('./seeders/12_system_config.seeder');

const seedRole = require('./seeders/13_role.seeder');
const seedRolePermission = require('./seeders/14_role_permission.seeder');
const seedOrganization = require('./seeders/15_organization.seeder');

const seedUser = require('./seeders/16_user.seeder');
const seedSystemEmployee = require('./seeders/17_system_employee.seeder');
const seedOrganizationDocument = require('./seeders/18_organization_document.seeder');
const seedOrganizationStatusHistory = require('./seeders/19_organization_status_history.seeder');

const seedTender = require('./seeders/20_tender.seeder');
const seedTenderDocument = require('./seeders/21_tender_document.seeder');
const seedTenderStatusHistory = require('./seeders/22_tender_status_history.seeder');
const seedCommittee = require('./seeders/23_committee.seeder');
const seedCommitteeMember = require('./seeders/24_committee_member.seeder');

const seedBid = require('./seeders/25_bid.seeder');
const seedBidDocument = require('./seeders/26_bid_document.seeder');
const seedBidGuarantee = require('./seeders/27_bid_guarantee.seeder');
const seedBidEvaluation = require('./seeders/28_bid_evaluation.seeder');
const seedCommitteeEvaluation = require('./seeders/29_committee_evaluation.seeder');
const seedBidStatusHistory = require('./seeders/30_bid_status_history.seeder');

const seedContract = require('./seeders/31_contract.seeder');
const seedTenderReport = require('./seeders/32_tender_report.seeder');
const seedNotification = require('./seeders/33_notification.seeder');
const seedActivityLog = require('./seeders/34_activity_log.seeder');

async function main() {
  console.log('Starting Tender_Flow database seeding...\n');

  console.log('Level 1: Seeding lookup & master tables...');
  await seedOrganizationType(prisma);
  await seedOrganizationStatus(prisma);
  await seedOrganizationDocType(prisma);
  await seedPermission(prisma);
  await seedUserStatus(prisma);
  await seedTenderCategory(prisma);
  await seedTenderStatus(prisma);
  await seedTenderDocType(prisma);
  await seedBidStatus(prisma);
  await seedBidDocType(prisma);
  await seedCommitteeType(prisma);
  await seedSystemConfig(prisma);

  console.log('Level 2: Seeding roles & organizations...');
  await seedRole(prisma);
  await seedRolePermission(prisma);
  await seedOrganization(prisma);

  console.log('Level 3: Seeding users & org documents...');
  await seedUser(prisma);
  await seedSystemEmployee(prisma);
  await seedOrganizationDocument(prisma);
  await seedOrganizationStatusHistory(prisma);

  console.log('Level 4: Seeding tenders & committees...');
  await seedTender(prisma);
  await seedTenderDocument(prisma);
  await seedTenderStatusHistory(prisma);
  await seedCommittee(prisma);
  await seedCommitteeMember(prisma);

  console.log('Level 5: Seeding bids & evaluations...');
  await seedBid(prisma);
  await seedBidDocument(prisma);
  await seedBidGuarantee(prisma);
  await seedBidEvaluation(prisma);
  await seedCommitteeEvaluation(prisma);
  await seedBidStatusHistory(prisma);

  console.log('Level 6: Seeding contracts, notifications & logs...');
  await seedContract(prisma);
  await seedTenderReport(prisma);
  await seedNotification(prisma);
  await seedActivityLog(prisma);

  console.log('\nTender_Flow database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding failed with error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });