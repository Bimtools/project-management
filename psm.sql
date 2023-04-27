if not exists(select * from sys.databases where name ='psmdb')
begin
	create database psmdb
end
go
use psmdb
--Create Projects Table
if not exists(select*from sys.objects where object_id = object_id(N'[dbo].[Projects]', N'U'))
begin
create table Projects(
	Id UniqueIdentifier not null default newid(),
	Code varchar(15),
	ProjectName text,
	Responsible char(8),
	Purchaser varchar(255),
	QCStaff varchar(255),
	ClientId UniqueIdentifier,
	ClientName varchar(255),
	ClientPO varchar(50),
	ClientContract float,
	ClientDelivery datetime,
	HourBudget float,
	StatusId int,
	Status varchar(50),
	FY varchar(9),
	CreatedOn datetime not null,
	CreatedBy char(8) not null,
	ModifiedOn datetime not null,
	ModifiedBy char(8) not null,
	primary key (Id)
)
end
--Create Supplier Table
if not exists (select * from sys.objects where object_id = object_id(N'[dbo].[Suppliers]',N'U'))
begin
create table Suppliers(
	Id UniqueIdentifier not null primary key default newid(),
	ProjectId UniqueIdentifier not null,
	SupplierName varchar(255),
	SupplierPO varchar(50),
	EquipmentValue float,
	EngineeringValue float,
	SupplierDelivery datetime,
	CreatedOn datetime not null,
	CreatedBy char(8) not null,
	ModifiedOn datetime not null,
	ModifiedBy char(8) not null,
	constraint fk_Suppliers_ProjectId
	foreign key (ProjectId) references Projects(Id)
)
end

--Create Project Status Table

if not exists (select * from sys.objects where object_id = object_id(N'[dbo].[ProjectStatus]',N'U'))
begin
create table ProjectStatus(
	Id UniqueIdentifier not null primary key default newid(),
	ProjectId UniqueIdentifier not null,
	SupplierName varchar(255),
	SupplierPO varchar(50),
	EquipmentValue float,
	EngineeringValue float,
	SupplierDelivery datetime,
	CreatedOn datetime not null,
	CreatedBy char(8) not null,
	ModifiedOn datetime not null,
	ModifiedBy char(8) not null,
	constraint fk_Suppliers_ProjectId
	foreign key (ProjectId) references Projects(Id)
)
end
