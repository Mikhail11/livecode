При запуске контейнера Piston в случае возникновения ошибки: `Cgroup v2 not found. Please make sure cgroup v2 is enabled on your system`

На Windows 11:

1. Создать файл `%UserProfile%\.wslconfig`

2. Добавить в файл настройки:

```
[wsl2]
kernelCommandLine = cgroup_no_v1=all
```

3. В случае повторения или возникновения новых ошибок WSL2 добавить настройки:

```
memory=4GB # Limits VM memory in WSL 2 to 4 GB
processors=2 # Makes the WSL 2 VM use two virtual processors
```

Дополнительные материалы:

https://superuser.com/questions/1765370/cannot-locate-wslconfig-in-user-profile-on-windows-11

https://superuser.com/questions/1765370/cannot-locate-wslconfig-in-user-profile-on-windows-11
