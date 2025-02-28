using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NojeMenu_API.Migrations
{
    /// <inheritdoc />
    public partial class AddPickUpAddressToOrderHeader : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PickupAddress",
                table: "OrderHeaders",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PickupAddress",
                table: "OrderHeaders");
        }
    }
}
