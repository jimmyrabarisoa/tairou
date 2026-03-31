namespace Domain;

public class Idea
{
    /// <summary>
    /// If a property is named Id, by convention EF will consider it as the primary key.
    /// Otherwise, add the [Key] data annotation to the property that you want to tell EF is the primary key of the table.
    /// GUID (Globally Unique Identifier) will generate an unique Id for every instance of this class
    /// </summary>
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Title { get; set; }
    public DateTime DueDate { get; set; }
    public string? Description { get; set; }
    public string? DefinitionOfDone { get; set; }
    public int Status { get; set; }
    public DateTime CreatedAt { get; set; } = new DateTime();
    public DateTime UpdatedAt { get; set; }
}
