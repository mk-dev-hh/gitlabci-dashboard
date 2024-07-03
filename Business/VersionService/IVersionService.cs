namespace dvelop.Business.VersionService
{
    public interface IVersionService
    {
        SemVer Version { get; }
    }
}